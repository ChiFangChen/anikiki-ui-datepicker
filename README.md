# ANIKIKI UI DatePicker

[Storybook Docs](https://anikiki-ui-datepicker.netlify.app/)

---

## Usage

##### Install

`npm i anikiki-ui-datepicker`

##### Import

```ts
import React, { FunctionComponent, useState } from 'react';
import { DatePicker } from 'kui-datepicker';

const App: FunctionComponent = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const onSelect = (target: Date | null): void => setDate(target);

  return <DatePicker date={date} onSelect={onSelect} />;
};

export default App;
```
