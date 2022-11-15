module.exports = function (req, res, next) {
  if (req.user.role !== "admin") return res.status(403).send("Forbidden !!");
  next();
}

/**
 * delany=> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczY2M0YWYyMjc1YzU4ODJlOTIyNjQiLCJlbWFpbCI6ImRAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Njg1MzQzOTF9.2t660cYZ7_obsy4HRITOuCNaYLtU2ljSOsQlUYz5kng
 * 
 * liton=> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczZDE5Y2NjNTJjNjQxMzRhZDU3MTAiLCJlbWFpbCI6ImxAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTM0ODIzfQ.iv8oQREasRdrAbAqVt8L4aMa6l6AHGNtvQIxpcCsEhc
 * 
 * Taskin=> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczZDc2NWQyYTQ4YzVkOWQwYTU1Y2UiLCJlbWFpbCI6InRAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Njg1MzYxNjV9.HtEpKmBeXR_2ygtTyGMMKBjmGzQ8yOniud8d3Vr5840
 */