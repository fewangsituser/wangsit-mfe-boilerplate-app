import { FilterField } from 'wangsvue/components/filtercontainer/FilterContainer.vue.d';
import { QueryParams } from 'wangsvue/components/datatable/DataTable.vue';
import { MultiSelectOption } from 'wangsvue/types/options.type';
import { MemberServices } from 'wangsit-api-services';

export const quickFilterFields: FilterField[] = [
  {
    label: 'Country',
    field: 'country',
    type: 'multiselect',
    placeholder: 'Select country',
    fetchOptionFn: async (
      params: QueryParams,
    ): Promise<MultiSelectOption[]> => {
      try {
        const { data } = await MemberServices.getMemberOptions(params);
        return data.data.country;
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
    fetchOptionFn: async (
      params: QueryParams,
    ): Promise<MultiSelectOption[]> => {
      try {
        const { data } = await MemberServices.getMemberOptions(params);
        return data.data.country;
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
