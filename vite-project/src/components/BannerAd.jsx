import { useEffect } from 'react';

export default function BannerAd() {
  useEffect(() => {
    if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
      window.adsbygoogle.push({});
    } else {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX'); // Replace with your ID
      document.head.appendChild(script);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // Replace with your ID
      data-ad-slot="1234567890"                // Replace with your Ad Slot
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
