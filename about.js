// about.js

window.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('#about');
    const main = document.querySelector('#main');
  
    if (aboutLink && main) {
      aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
  
        main.innerHTML = '';
  
        const img = document.createElement('img');
        img.src = 'image/about.jpg';
        img.className = 'img-about';
        main.appendChild(img);
  
        const p = document.createElement('div');
        p.className = 'text-about';
        p.innerHTML = `
          <p>
Lynne Chen is a Chinese freelance illustrator based in the United States. She is Deaf, fluent in Chinese and Chinese Sign Language, and also proficient in English and Korean, with working knowledge of Korean Sign Language and American Sign Language.
</p>
<p>
Passionate about working with color, she studied Visual Communication Design at the Shanghai Institute of Technology (Bachelor’s degree). She currently works in UI/UX design and web development.
</p>
<p>
Her illustration themes focus on Chinese Deaf culture, sign language, and everyday life within the Deaf community, portraying the beauty of sign language and the authenticity of Deaf experiences.
</p>
<p>
You can find more of her work on Instagram, where she posts regular updates. If you're interested in collaborating with her, please email: <strong>cllin206@gmail.com</strong>.
</p>

        `;
        main.appendChild(p);
      });
    }
  });
  