# Collage

```javascript
<Collage
  columns={3}
  height={300}
  width={300}
  renderImage={({ index, width, height }) => {
    const images = [
      {
        color: 'rgb(111, 91, 77)',
        naturalHeight: 751,
        naturalWidth: 564,
        src: 'http://uxpin.com/images/homepage/about-us/christmas-party.jpg',
      },
      {
        color: 'rgb(231, 186, 176)',
        naturalHeight: 200,
        naturalWidth: 98,
        src: 'http://uxpin.com/images/homepage/about-us/team-lunch.jpg',
      },
      {
        color: '#000',
        naturalHeight: 300,
        naturalWidth: 200,
        src: 'http://uxpin.com/images/homepage/about-us/location-gdynia.jpg',
      },
      {
        color: '#000',
        naturalHeight: 517,
        naturalWidth: 564,
        src: 'http://uxpin.com/images/homepage/about-us/company-retreat.jpg',
      },
      {
        color: '#000',
        naturalHeight: 806,
        naturalWidth: 564,
        src:
          'http://uxpin.com/images/homepage/about-us/location-mountain-view.jpg',
      },
      {
        color: '#000',
        naturalHeight: 200,
        naturalWidth: 200,
        src: 'http://uxpin.com/images/homepage/jobs/bg-gdansk.jpg',
      },
    ];
    const image = images[index];
    return (
      <Mask wash width={width} height={height}>
        <Image
          alt="collage image"
          color={image.color}
          fit="cover"
          naturalHeight={image.naturalHeight}
          naturalWidth={image.naturalWidth}
          src={image.src}
        />
      </Mask>
    );
  }}
/>
```
