<script setup lang="ts">
import { onMounted } from 'vue';
import { useBreadcrumbStore } from '@/store';
import { BreadcrumbMenu } from 'wangsvue/components/breadcrumb/Breadcrumb.vue';

const { setBreadcrumbs } = useBreadcrumbStore();

const menus: BreadcrumbMenu[] = [
  {
    name: 'Wangs',
  },
  {
    name: 'Another Page',
  },
];

onMounted(() => {
  setBreadcrumbs(menus);
});
</script>
<template>
  <h1>Hello from Another Tab</h1>
</template>
