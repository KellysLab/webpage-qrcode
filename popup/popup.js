document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Show loading state
    document.getElementById('qrcode').innerHTML = '<div class="loading">生成中...</div>';
    
    // Get current tab URL and info
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = tab.url;
    const favicon = tab.favIconUrl || chrome.runtime.getURL('icons/default-favicon.png');
    const title = tab.title;

    // Update site name
    document.getElementById('siteName').textContent = title;

    // Hide favicon while loading
    const faviconImg = document.getElementById('favicon');
    faviconImg.style.visibility = 'hidden';

    // Generate QR code and wait for it to complete
    document.getElementById('qrcode').innerHTML = '';
    await new Promise((resolve) => {
      const qr = new QRCode(document.getElementById('qrcode'), {
        text: url,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });

      // Wait for QR code image to be fully loaded
      const qrImage = document.querySelector('#qrcode img');
      if (qrImage && qrImage.complete) {
        resolve();
      } else if (qrImage) {
        qrImage.onload = resolve;
      } else {
        setTimeout(resolve, 100);
      }
    });

    // Load favicon
    await new Promise((resolve) => {
      const loadFavicon = () => {
        faviconImg.style.visibility = 'visible';
        resolve();
      };

      const handleError = () => {
        // 如果加载失败，使用默认图标
        faviconImg.src = chrome.runtime.getURL('icons/default-favicon.png');
        faviconImg.onerror = () => {
          // 如果默认图标也加载失败，隐藏图标
          console.error('Default favicon failed to load');
          faviconImg.style.display = 'none';
          resolve();
        };
        faviconImg.onload = loadFavicon;
      };

      // 设置初始图标加载处理
      faviconImg.onload = loadFavicon;
      faviconImg.onerror = handleError;
      
      // 开始加载图标
      faviconImg.src = favicon;
    });

  } catch (error) {
    console.error('Error generating QR code:', error);
    document.getElementById('qrcode').innerHTML = '<div class="error">生成失败，请重试</div>';
  }
}); 