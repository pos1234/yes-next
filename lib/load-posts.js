export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://yes.et/jobs/wp-json/wp/v2/job_listing/?per_page=100')
    const data = await res.json()
   
    return data
  }