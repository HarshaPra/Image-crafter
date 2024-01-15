<h1>mage-crafter: Optimal Image Resizing for File Uploads</h1>

<p>Image-crafter is a lightweight Typescript library designed to streamline the process of resizing images before uploading, making it the ideal solution for adhering to your application's specific size requirements.</p>

<h2>Features:</h2>

<ul>
  <li><strong>Simple Integration:</strong> Easily incorporate Image-crafter into your project with minimal setup.</li>
  <li><strong>File Format Ready:</strong> Image-crafter automates the image resizing process while ensuring the output adheres to your application's required file format, enabling seamless uploads.</li>
  <li><strong>Compatibility:</strong> Works seamlessly with popular front-end frameworks such as Vue.js, Angular, and React.</li>
  <li><strong>Customizable:</strong> Fine-tune the resizing parameters to precisely match your application's size requirements.</li>
</ul>

<h2>Props:</h2>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>file</td>
      <td>File</td>
      <td>The input image file to be resized.</td>
    </tr>
    <tr>
      <td>width</td>
      <td>number</td>
      <td>The desired width for the resized image.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>number</td>
      <td>The desired height for the resized image.</td>
    </tr>
    <tr>
      <td>imageName</td>
      <td>string</td>
      <td>The name to be assigned to the resized image.</td>
    </tr>
  </tbody>
</table>

<h2>Usage:</h2>

<p><strong>Install Image-crafter:</strong></p>
<pre><code>npm install image-crafter
</code></pre>

<pre><code>yarn add image-crafter
</code></pre>

<pre><code>pnpm add image-crafter
</code></pre>

<p>Include Image-crafter in your JavaScript file:</p>

<pre><code>import {resize} from 'image-crafter';

const inputElement = document.getElementById('fileInput');

inputElement.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if(file) {
    // Resize the image to match your application's specific requirements
  resize({file, width: 300, height: 200, imageName:file.name})
    .then((resizedFile) => {
      // Use the resizedFile for uploading or further processing
      console.log(resizedFile);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

});
</code></pre>

<p><strong>Customize as Needed:</strong></p>

<p>Adjust the resize parameters according to your application's specific size requirements.</p>


<p>Now, you can effortlessly enhance your image upload functionality with Image-crafter, ensuring images meet your application's size specifications for an optimized user experience!</p>

