import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/bookings(.*)',
  '/checkout(.*)',
  '/favourites(.*)',
  '/profile(.*)',
  '/rentals(.*)',
  '/reviews(.*)',
])