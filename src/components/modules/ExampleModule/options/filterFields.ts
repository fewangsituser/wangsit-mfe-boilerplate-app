import { FilterField } from 'wangsvue/components/filtercontainer/FilterContainer.vue.d';
import { MultiSelectOption } from 'wangsvue/types/options.type';

export const quickFilterFields: FilterField[] = [
  {
    label: 'Country',
    field: 'country',
    type: 'multiselect',
    placeholder: 'Select country',
    fetchOptionFn: async (): Promise<MultiSelectOption[]> => {
      try {
        return [{ label: 'Indonesia' }];
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  {
    label: 'Age',
    fields: ['minAge', 'maxAge'],
    type: 'rangenumber',
    placeholder: '0',
  },
];

export const filterFields: FilterField[] = [
  {
    label: 'Country',
    field: 'country',
    type: 'multiselect',
    placeholder: 'Select country',
    fetchOptionFn: async (): Promise<MultiSelectOption[]> => {
      try {
        return [{ label: 'Indonesia' }];
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  {
    label: 'Age',
    fields: ['minAge', 'maxAge'],
    type: 'rangenumber',
    placeholder: '0',
  },
];
