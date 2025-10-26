# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Post.create!([
  {
    title: "First Post: Hello Rails + React",
    content: "This is my first blog post! The app is now talking to both Rails and React. 🚀"
  },
  {
    title: "Understanding Redux in a Rails Context",
    content: "Redux helps manage application state in large React apps. In our Rails backend, we can expose a JSON API to power that state efficiently."
  },
  {
    title: "Deploying Rails with React Frontend",
    content: "In this post, we explore how to deploy a full-stack Rails + React app using jsbundling-rails and esbuild. It’s simpler than it looks!"
  }
])
