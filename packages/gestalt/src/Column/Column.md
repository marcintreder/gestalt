# Column

```javascript
<Box display="flex" direction="row" paddingY={2}>
  {Array(12)
    .fill()
    .map((_, i) => (
      <Column span={1} key={i}>
        <Box color="lightGray" padding={1}>
          <Box color="white" paddingY={2}>
            <Text align="center">1</Text>
          </Box>
        </Box>
      </Column>
    ))}
</Box>
```
