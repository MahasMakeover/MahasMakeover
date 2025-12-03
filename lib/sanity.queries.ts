import { groq } from 'next-sanity'

export const galleryQuery = groq`*[_type == "galleryImage" && approved == true] | order(_createdAt desc) {
  _id,
  title,
  image,
  category,
  tags,
  instagramPost,
  _createdAt
}`

export const galleryByCategoryQuery = (category: string) => groq`*[_type == "galleryImage" && approved == true && category == $category] | order(_createdAt desc) {
  _id,
  title,
  image,
  category,
  tags,
  instagramPost,
  _createdAt
}`

export const reviewsQuery = groq`*[_type == "review" && approved == true] | order(_createdAt desc) {
  _id,
  name,
  rating,
  reviewText,
  eventType,
  image,
  _createdAt
}`

export const featuredReviewsQuery = groq`*[_type == "review" && approved == true && featured == true] | order(_createdAt desc) [0...5] {
  _id,
  name,
  rating,
  reviewText,
  eventType,
  image,
  _createdAt
}`

export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  name,
  description,
  price,
  duration,
  features
}`

export const classesQuery = groq`*[_type == "class"] | order(_createdAt desc) {
  _id,
  title,
  description,
  duration,
  price,
  schedule,
  maxStudents,
  curriculum
}`

