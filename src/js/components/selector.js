import {Select} from '../vendor/select';


const select = new Select('#select', {
  placeholder: 'Chose element',
  // selectedId: '2',
  data: [
    {id: '1', value: 'First'},
    {id: '2', value: 'Second'},
    {id: '3', value: 'Third'},
  ],
  onSelect(item) {
    console.log('Selected Item', item)
  }
})
