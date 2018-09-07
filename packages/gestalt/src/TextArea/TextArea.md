# TextArea

```javascript
  <Box>
        <Box marginBottom={2}>
          <Label htmlFor="aboutme">
            <Text>With a placeholder</Text>
          </Label>
        </Box>
        <TextArea
          id="aboutme"
          onChange={value => console.log(value)}
          placeholder="Write something about yourself..."
        />
      </Box>
```
