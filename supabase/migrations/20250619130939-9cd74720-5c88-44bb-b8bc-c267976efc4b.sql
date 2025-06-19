
-- Drop the existing problematic RLS policies
DROP POLICY IF EXISTS "Anyone can signup for waitlist" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Only admins can view waitlist" ON public.waitlist_signups;

-- Create a new, simpler INSERT policy that allows anyone to signup
CREATE POLICY "Allow public waitlist signups" 
  ON public.waitlist_signups 
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Keep the SELECT policy restrictive (admin only)
CREATE POLICY "Restrict waitlist viewing to admins" 
  ON public.waitlist_signups 
  FOR SELECT 
  TO authenticated
  USING (false);

-- Allow UPDATE and DELETE for admins only (in case needed later)
CREATE POLICY "Allow admin updates" 
  ON public.waitlist_signups 
  FOR UPDATE 
  TO authenticated
  USING (false);

CREATE POLICY "Allow admin deletes" 
  ON public.waitlist_signups 
  FOR DELETE 
  TO authenticated
  USING (false);
