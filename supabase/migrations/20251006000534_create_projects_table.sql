/*
  # Create Projects Table

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `category` (text) - Project category (e.g., 'restaurant', 'clothing', 'ecommerce')
      - `images` (jsonb) - Array of image URLs for the project slider
      - `technologies` (text[]) - Array of technologies used
      - `live_url` (text, optional) - Live project URL
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access (anyone can view projects)
    - Add policy for authenticated users to manage projects
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  technologies text[] DEFAULT ARRAY[]::text[],
  live_url text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS projects_order_index_idx ON projects(order_index);
CREATE INDEX IF NOT EXISTS projects_category_idx ON projects(category);