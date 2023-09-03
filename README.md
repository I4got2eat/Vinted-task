Project done for vinted engineering academy.

The application is focused on displaying and managing images, allowing users to favorite or unfavorite them.

Technologies Used:

React: The application is primarily built using React, a JavaScript library for building user interfaces. React components are used to structure and manage the UI elements.
Key Components:

Tabs Component (Tabs.js): Responsible for rendering tabs for "Home" and "Favorites." It manages the active tab and conditionally renders content based on the selected tab.

ScrollSection Component (ScrollSection.js): Responsible for handling the scrolling and loading of images. It communicates with an external API (Flickr) to fetch images and dynamically loads more images as the user scrolls down the page.

ImageSlot Component (ImageSlot.js): Responsible for rendering individual image slots. It handles image favoriting/unfavoriting, image metadata display on hover, and rendering the image itself.

FavoritesTab Component (FavoritesTab.js): Responsible for displaying the user's favorite images. It uses data stored in local storage to render these images.


Implementation Details:

State Management: React state hooks (useState) are used to manage component-level states, such as the active tab and image data.

API Integration: The application fetches image data from the Flickr API using the fetch function. It constructs API URLs with query parameters to customize the results.

Local Storage: The application uses the browser's local storage to store and retrieve data, such as the list of favorite images. It employs functions to add, retrieve, and remove data from local storage.

Event Handling: Event listeners are used for handling user interactions like clicking on tabs, scrolling to load more images, and hovering over images.


Mykolas Sanda.
