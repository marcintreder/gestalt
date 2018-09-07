import * as React from 'react';
import PropTypes from 'prop-types';
import Mask from '../Mask/Mask.js';
import Image from '../Image/Image.js';
import Collage from '../Collage/Collage.js';
import Box from '../Box/Box.js';

export default function CollageMerge(props) {
  const testImages = props.images;
  return (
    <Box display="flex" wrap>
      <Collage
        columns={props.columns}
        height={props.height}
        width={props.width}
        gutter={props.gutter}
        layoutKey={props.layoutKey}
        cover={props.cover}
        renderImage={({ index, width, height }) => {

          const image = testImages[index];

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
    </Box>
  );
}

CollageMerge.propTypes={
  columns: PropTypes.oneOf([2, 3, 4]).isRequired,
  cover: PropTypes.bool,
  gutter: PropTypes.number,
  height: PropTypes.number.isRequired,
  layoutKey: PropTypes.number,
  width: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object)
}

CollageMerge.defaultProps={
  columns: 2,
  cover: false,
  gutter: 0,
  height: 300,
  width: 300,
}
