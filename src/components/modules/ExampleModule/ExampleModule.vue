<script setup lang="ts">
import { computed, shallowRef } from 'vue';
import { Badge, BadgeGroup, DataTable } from 'wangsvue';
import {
  FetchResponse,
  TableCellComponent,
  TableColumn,
} from 'wangsvue/components/datatable/DataTable.vue.d';
import { MenuItem } from 'wangsvue/components/menuitem';
import { Member } from '@/types/member.type';
import router from '@/router';
import DialogDeleteUser from './DialogDeleteUser/DialogDeleteUser.vue';
import ExampleModuleTableFilter from './ExampleModuleTableFilter.vue';
import ExampleModuleHeader from './ExampleModuleHeader.vue';
import ExampleModuleQuickFilter from './ExampleModuleQuickFilter.vue';
import response from './exampleResponse.json';

const selectedUser = shallowRef<Member>();
const showDeleteUserDialog = shallowRef(false);

const singleAction: MenuItem[] = [
  {
    label: 'Detail',
    icon: 'checkbox-blank-circle',
    command: (): void => {
      router.push('/detail');
    },
  },
  {
    label: 'Delete User',
    icon: 'checkbox-blank-circle',
    danger: true,
    command: (): void => {
      showDeleteUserDialog.value = true;
    },
  },
];

const tableColumns = computed<TableColumn[]>(() => {
  return [
    {
      field: 'nickName',
      header: 'Name',
      sortable: true,
      reorderable: false,
      fixed: true,
      bodyComponent: (data: Member): TableCellComponent => {
        return {
          component: Badge,
          props: {
            label: data.nickName,
          },
        };
      },
    },
    {
      field: 'email',
      header: 'Email',
      sortable: true,
      fixed: true,
    },
    {
      field: 'teams',
      header: 'Teams',
      sortable: false,
      bodyComponent: (data: Member): TableCellComponent => {
        return {
          component: BadgeGroup,
          props: {
            labels: data.teams,
            limit: 2,
            headerLabel: 'Teams',
          },
        };
      },
    },
  ];
});

const getTableData = async (): Promise<FetchResponse<Member> | undefined> => {
  try {
    const data = response;

    return data;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <ExampleModuleHeader />
  <ExampleModuleTableFilter />
  <ExampleModuleQuickFilter />
  <DataTable
    :columns="tableColumns"
    :fetch-function="getTableData"
    :options="singleAction"
    @toggle-option="selectedUser = $event"
    data-key="_id"
    lazy
    table-name="user-list"
    use-option
    use-paginator
  />
  <DialogDeleteUser
    v-model:visible="showDeleteUserDialog"
    :list="selectedUser ? [selectedUser] : []"
    list-label="name"
  />
</template>
