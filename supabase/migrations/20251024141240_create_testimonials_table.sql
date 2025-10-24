/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text) - Name of the person giving testimonial
      - `role` (text) - Role or title of the person
      - `company` (text) - Company name
      - `content` (text) - Testimonial content
      - `rating` (integer) - Rating from 1-5
      - `avatar_url` (text, optional) - URL to avatar image
      - `created_at` (timestamptz) - Timestamp of creation
      - `is_featured` (boolean) - Whether to feature on homepage
      
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access to approved testimonials
    - Add policy for authenticated users to insert testimonials
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  is_featured boolean DEFAULT false
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);