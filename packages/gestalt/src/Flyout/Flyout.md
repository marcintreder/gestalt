# Flyout

```javascript
<Box>
  <div
    style={{ display: 'inline-block' }}
    ref={c => {
      this.anchor = c;
    }}
  />
  <Flyout
    anchor={this.anchor}
    idealDirection="up"
    onDismiss={() => console.log('')}
    size="md"
  >
    <Box padding={3}>
      <Text bold align="center">
        Need help with something? Check out our Help Center.
      </Text>
      <Box paddingX={2} marginTop={3}>
        <Button color="red" text="Visit the help center" />
      </Box>
    </Box>
  </Flyout>
</Box>
```
