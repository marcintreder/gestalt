# Select List

```javascript
<Box>
        <Box paddingY={2}>
          <Label htmlFor="city">
            <Text>City</Text>
          </Label>
        </Box>
        <SelectList
          id="city"
          name="city"
          options={[
      {
        value: "bos",
        label: "Boston"
      },
      {
        value: "la",
        label: "Los Angeles"
      },
      {
        value: "sf",
        label: "San Francisco"
      }
    ]}
          placeholder="Select city"
        />
      </Box>
```
