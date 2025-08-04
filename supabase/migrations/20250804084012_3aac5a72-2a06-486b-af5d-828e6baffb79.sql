-- Fix RLS policies for waitlist_signups table
-- Drop existing overly restrictive policies
DROP POLICY IF EXISTS "Allow admin deletes" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Allow admin updates" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Restrict waitlist viewing to admins" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Allow anonymous waitlist signups" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Allow authenticated waitlist signups" ON public.waitlist_signups;

-- Add function to validate email format
CREATE OR REPLACE FUNCTION public.is_valid_email(email text)
RETURNS boolean AS $$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create secure policies for waitlist signups
CREATE POLICY "Allow valid waitlist signups" 
ON public.waitlist_signups 
FOR INSERT 
WITH CHECK (
  public.is_valid_email(email) AND
  length(trim(email)) > 0 AND
  length(trim(coalesce(name, ''))) >= 0
);

-- Prevent duplicate email signups
CREATE POLICY "Prevent duplicate email signups" 
ON public.waitlist_signups 
FOR INSERT 
WITH CHECK (
  NOT EXISTS (
    SELECT 1 FROM public.waitlist_signups 
    WHERE email = waitlist_signups.email
  )
);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_waitlist_signups_updated_at ON public.waitlist_signups;
CREATE TRIGGER update_waitlist_signups_updated_at
  BEFORE UPDATE ON public.waitlist_signups
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();