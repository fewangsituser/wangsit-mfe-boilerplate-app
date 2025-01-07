<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { MenuItem } from 'wangsvue/components/menuitem';
import {
  ButtonBulkAction,
  ButtonDownload,
  ButtonFilter,
  ButtonSearch,
} from 'wangsvue';
import { Member } from 'wangsit-api-services/src/types/memberService.type';
import DialogDeleteUser from './DialogDeleteUser/DialogDeleteUser.vue';

const dataSelected = ref<Member[]>([]);
const showDeleteUserDialog = shallowRef(false);

const bulkAction: MenuItem[] = [
  {
    label: 'Delete User',
    icon: 'checkbox-blank-circle',
    danger: true,
    command: (): void => {
      showDeleteUserDialog.value = true;
    },
  },
];
</script>

<template>
  <div class="flex justify-end gap-4" data-wv-section="tabletoolbars">
    <ButtonBulkAction
      v-model:selected-data="dataSelected"
      :options="bulkAction"
      @update:selected-data="console.log"
      table-name="user-list"
    />
    <ButtonSearch class="ml-auto" table-name="user-list" />
    <ButtonDownload file-name="Download" table-name="user-list" />
    <ButtonFilter table-name="user-list" />
  </div>

  <DialogDeleteUser
    v-model:visible="showDeleteUserDialog"
    :list="dataSelected"
    list-label="name"
  />
</template>
