
-- Create waitlist_signups table
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT, -- to track where signups came from
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - make it public for now since this is a waitlist
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert (for waitlist signup)
CREATE POLICY "Anyone can signup for waitlist" 
  ON public.waitlist_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that prevents public reading (admin only)
CREATE POLICY "Only admins can view waitlist" 
  ON public.waitlist_signups 
  FOR SELECT 
  USING (false); -- We'll update this later when we add admin functionality

-- Create index for email lookups (to prevent duplicates efficiently)
CREATE INDEX idx_waitlist_signups_email ON public.waitlist_signups(email);

-- Create index for created_at (for admin dashboard sorting)
CREATE INDEX idx_waitlist_signups_created_at ON public.waitlist_signups(created_at DESC);
