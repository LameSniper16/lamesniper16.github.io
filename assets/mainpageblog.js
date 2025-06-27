console.log('Hey!');

async function loadPostsFromJson(jsonUrl) {
  try {
    // Fetch the JSON file containing HTML file references
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error(`Failed to load JSON file! Status: ${response.status}`);
    }

    const jsonData = await response.json();

    // Ensure the JSON contains the required list of HTML files
    const htmlFiles = jsonData?.htmlFiles;
    if (!htmlFiles || !Array.isArray(htmlFiles)) {
      throw new Error('JSON does not contain a valid "htmlFiles" array.');
    }

    // Get all blog post containers
    const blogPosts = document.querySelectorAll('.blogpostcontainer > div');
    if (blogPosts.length !== htmlFiles.length) {
      console.warn(
        'Mismatch between number of blog post elements and number of HTML files.'
      );
    }

    // Loop through the HTML files and update blog post content
    for (let i = 0; i < htmlFiles.length; i++) {
      if (i < blogPosts.length) {
        await updateBlogPostFromHtml(htmlFiles[i], blogPosts[i]);
        // Update the `onclick` attribute for navigation
        blogPosts[i].setAttribute('onclick', `window.location='${htmlFiles[i]}'`);
      } else {
        console.warn(`No corresponding blog post element for file: ${htmlFiles[i]}`);
      }
    }
  } catch (error) {
    console.error('Error fetching or processing the JSON file:', error);
  }
}

async function updateBlogPostFromHtml(url, blogPostElement) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    // Extract elements from the HTML file
    const titleElement = doc.querySelector('meta[property="og:title"]');
    const descriptionElement = doc.querySelector('meta[property="og:description"]');
    const imgElement = doc.querySelector('#previewimg');
    const dateElement = doc.querySelector('meta[name="releasedate"]');

    const title = titleElement?.getAttribute('content')?.trim() || 'Default Title';
    const description = descriptionElement?.getAttribute('content')?.trim() || 'No description available.';
    const imgSrc = imgElement?.getAttribute('src') || './assets/default.png';
    const publishDate = dateElement?.getAttribute('content')?.trim() || 'Unknown date';


    // Update the corresponding elements in the blog post
    const blogTitle = blogPostElement.querySelector('.blogtitle');
    const blogDescription = blogPostElement.querySelector('.blogdescription');
    const blogImage = blogPostElement.querySelector('img');
    const blogDate = blogPostElement.querySelector('.blogdata');

    if (blogTitle) blogTitle.textContent = title;
    if (blogDescription) blogDescription.textContent = description;
    if (blogImage) blogImage.src = imgSrc;
    if (blogDate) blogDate.textContent = publishDate;
  } catch (error) {
    console.error('Error fetching or parsing the HTML:', error);
  }
}

// Call the function with the URL of the JSON file
window.addEventListener('DOMContentLoaded', () => {
  loadPostsFromJson('./post/files.json');
});

