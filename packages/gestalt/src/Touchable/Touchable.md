# Touchable

```javascript
   <Touchable
          mouseCursor="zoomIn"
          onTouch={()=>console.log('')}
          shape="rounded"
        >
          <Mask shape="rounded">
            <Image
              alt="Antelope Canyon"
              naturalHeight={1}
              naturalWidth={1}
              src="http://uxpin.com/images/homepage/jobs/bg-gdansk.jpg"
            />
          </Mask>
          <Box paddingY={2}>
            <Link
              href="https://en.wikipedia.org/wiki/gdansk"
            >
              <Text align="center">Wiki Link</Text>
            </Link>
          </Box>
        </Touchable>
```
