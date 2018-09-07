# TextField

```javascript
  <Box>
        <Box marginBottom={2}>
          <Label htmlFor="email">
            <Text>Email</Text>
          </Label>
        </Box>
        <TextField
          id="email"
          onChange={value => console.log(value)}
          placeholder="Email Address"
          type="email"
        />
  </Box>

```
