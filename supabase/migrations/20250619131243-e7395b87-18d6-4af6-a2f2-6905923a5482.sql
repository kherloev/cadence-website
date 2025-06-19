
-- Drop the current INSERT policy that's targeting the wrong role
DROP POLICY IF EXISTS "Allow public waitlist signups" ON public.waitlist_signups;

-- Create a new INSERT policy specifically for anonymous users (anon role)
CREATE POLICY "Allow anonymous waitlist signups" 
  ON public.waitlist_signups 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Also allow authenticated users to insert (in case someone is logged in)
CREATE POLICY "Allow authenticated waitlist signups" 
  ON public.waitlist_signups 
  FOR INSERT 
  TO authenticated
  WITH CHECK (true);
