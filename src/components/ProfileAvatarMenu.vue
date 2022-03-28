<template>
  <q-btn round class="float-right">
    <q-avatar size="42px">
      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
    </q-avatar>
    <q-menu persistent auto-close>
      <q-list style="min-width: 100px">
        <q-item clickable>
          <q-item-section>New tab</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>New incognito tab</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable>
          <q-item-section>Recent tabs</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>History</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>Downloads</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable>
          <q-item-section>Settings</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable>
          <q-item-section>Help &amp; Feedback</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {}
  }
}
</script>
