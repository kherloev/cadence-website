-- Create a SELECT policy that explicitly denies public read access
-- Only authenticated administrators should be able to read waitlist signups
CREATE POLICY "Restrict SELECT to authenticated admins only" 
ON public.waitlist_signups 
FOR SELECT 
USING (false);

-- Note: This policy denies all SELECT access for now. 
-- When you implement authentication and admin roles, you can update this policy to:
-- USING (auth.role() = 'authenticated' AND has_admin_role(auth.uid()))
-- For now, this ensures no unauthorized access to customer email addresses.