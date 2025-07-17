const shopList = document.querySelectorAll('#main .shop-item img');

const imgNameList = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'
];

let cartNumber = 0;
let cartImgSrc;

shopList.forEach((item, index) => {
  item.addEventListener('click', event => {
    const key = event.target.dataset.key;
    const product = productDescriptions[key];
    if (!product) return;

    const mask = document.createElement('div');
    mask.className = 'mask';

    const alert = document.createElement('div');
    alert.className = 'alert-box';

    const content = document.createElement('div');
    content.className = 'alert-content';

    let exitSvg = document.createElement('div');
    exitSvg.className = 'exit-svg';
    exitSvg.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2"/>
    <line x1="6" y1="18" x2="18" y2="6" stroke="black" stroke-width="2"/>
    </svg>
`;
    content.appendChild(exitSvg);

    let eventImgSrc = event.target.src;
    let bigImg = document.createElement('div');
    bigImg.style.marginBottom = '20px';
    bigImg.innerHTML = `<img id="big-img" src="${eventImgSrc}" style="width: 300px; height: 300px; object-fit: cover; border-radius: 10px"/>`
    content.appendChild(bigImg);

    let smallImg = document.createElement('div');
    smallImg.className = 'small-img';
    let imgNumber = imgNameList.length;
    let prev = index - 1 < 0 ? imgNumber - 1 : index - 1;
    let next = index + 1 >= imgNumber ? 0 : index + 1;
    
    [prev, index, next].forEach(imgIdx => {
      let imgNode = document.createElement('img');
      imgNode.className = 'small-img-item';
      imgNode.src = `image/${imgNameList[imgIdx]}`;
    
      // ✅ 获取 data-key（必须来自 shopList）
      const smallDataKey = shopList[imgIdx]?.dataset?.key;
      const smallProduct = productDescriptions?.[smallDataKey];
    
      imgNode.addEventListener('click', () => {
        // 更新大图
        bigImg.querySelector('img').src = imgNode.src;
    
        // ✅ 更新商品标题和描述
        const descBox = content.querySelector('.footer-desc');
        if (descBox && smallProduct) {
          descBox.innerHTML = `
            <p class="title">${smallProduct.title}</p>
            <p class="price">$${smallProduct.price}</p>
            ${smallProduct.desc.split('\n').map(p => `<p>${p}</p>`).join('')}
          `;
        }
    
        // ✅ 更新购物车数据
        document.querySelector('#number').innerText = '1';
        cartNumber = 1;
        cartImgSrc = imgNode.src;
      });
    
      smallImg.appendChild(imgNode);
    });
    
    
    content.appendChild(smallImg);
    
    // 创建 footer 并写入当前 product 内容
    let footer = document.createElement('div');
    footer.className = 'shop-footer';
    footer.innerHTML = `
      <div class="footer-desc">
        <p class="title">${product.title}</p>
        <p class="price">$${product.price}</p>
        ${product.desc.split('\n').map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="footer-cart">
        <div class="counter">
          <span id="sub">-</span>
          <span id="number">1</span>
          <span id="add">+</span>
        </div>
        <div class="cart">Add to Cart</div>
      </div>
    `;
    content.appendChild(footer);
    
    alert.appendChild(content);

    exitSvg.addEventListener('click', () => {
      mask.remove();
      alert.remove();
    });

    document.body.appendChild(mask);
    document.body.appendChild(alert);

    document.querySelector('#add').addEventListener('click', () => {
      let numberElement = document.querySelector('#number');
      let number = Number(numberElement.innerText);
      numberElement.innerText = number + 1;
    });

    document.querySelector('#sub').addEventListener('click', () => {
      let numberElement = document.querySelector('#number');
      let number = Number(numberElement.innerText);
      if (number > 0) {
        numberElement.innerText = number - 1;
      }
    });

    document.querySelector('.footer-cart .cart').addEventListener('click', () => {
      cartNumber = Number(document.querySelector('#number').innerText);
      cartImgSrc = document.querySelector('#big-img').src;
      document.querySelector('.shop-cart > span').innerText = cartNumber;

      // Auto open cart detail
      document.querySelector('.shop-cart').click();
    });
  });
});

const cartDetail = document.querySelector('.shop-cart-detail');
document.querySelector('.shop-cart').addEventListener('click', () => {
  cartDetail.style.display = 'block';
  if (cartImgSrc) {
    const detailItem = document.querySelector('.shop-cart-detail .detail-item');
    detailItem.innerHTML = `
      <img src="${cartImgSrc}"/>
      <div>
        <div>Artwork</div>
        <div>A3 Portrait</div>
        <div class="logic">
          <div class="content">
            <span id="cart-sub">-</span>
            <span id="cart-number">${cartNumber}</span>
            <span id="cart-add">+</span>
          </div>
          <div class="price">$${20 * cartNumber}</div>
        </div>
      </div>
      <div class="submit">Submit</div>`;

    document.querySelector('#cart-add').addEventListener('click', () => {
      let cartNumberNode = detailItem.querySelector('#cart-number');
      let newNumber = Number(cartNumberNode.innerText) + 1;
      cartNumberNode.innerText = newNumber;
      detailItem.querySelector('.price').innerText = `$${20 * newNumber}`;
    });

    document.querySelector('#cart-sub').addEventListener('click', () => {
      let cartNumberNode = detailItem.querySelector('#cart-number');
      let current = Number(cartNumberNode.innerText);
      if (current > 0) {
        let newNumber = current - 1;
        cartNumberNode.innerText = newNumber;
        detailItem.querySelector('.price').innerText = `$${20 * newNumber}`;
      }
    });
  }
});

document.querySelector('.cart-detail-exit').addEventListener('click', () => {
  cartDetail.style.display = 'none';
});

document.querySelector('.shop-cart-detail').addEventListener('click', event => {
  if (event.target.classList.contains('submit')) {
    const success = Math.random() > 0.3;

    cartDetail.style.display = 'none';
    document.querySelector('.shop-cart > span').innerText = '0';
    const detailItem = document.querySelector('.shop-cart-detail .detail-item');
    detailItem.innerHTML = '';

    // disable via class not attribute
    event.target.innerText = '已提交 ✔';
    event.target.classList.add('submitted');

    const resultMask = document.createElement('div');
    resultMask.className = 'mask';

    const resultBox = document.createElement('div');
    resultBox.className = 'alert-box';

    const resultContent = document.createElement('div');
    resultContent.className = 'alert-content';
    resultContent.innerHTML = `
  <p style="font-size: 20px; text-align: center; color: #555;">
    🛒 This page is for portfolio demonstration only.<br>
    For real purchases, please contact me at <strong>cllin206@gmail.com</strong>.
  </p>
`;

  

    const closeBtn = document.createElement('div');
    closeBtn.className = 'exit-svg';
    closeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2"/>
        <line x1="6" y1="18" x2="18" y2="6" stroke="black" stroke-width="2"/>
      </svg>
    `;

    closeBtn.addEventListener('click', () => {
      resultMask.remove();
      resultBox.remove();
      event.target.innerText = '确认提交';
      event.target.classList.remove('submitted');
    });

    resultContent.appendChild(closeBtn);
    resultBox.appendChild(resultContent);
    document.body.appendChild(resultMask);
    document.body.appendChild(resultBox);
  }
});