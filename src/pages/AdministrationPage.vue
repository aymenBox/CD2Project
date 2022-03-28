<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md row items-start q-gutter-md flex-center">
      <q-card class="my-card" v-for="element in PapierObject" :key="element.id" style="width:22%">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ element.Papiername }}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Demander</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>

const Papiername = ["Papier B3", "demande d'extrait de naissance", "Extrait de décès", "Transcriptions"];
//arrary of objects to be displayed in the card
const PapierObject = [{
  'id': 1,
  'Papiername': "Papier B3",
},
{
  'id': 2,
  'Papiername': "demande d'extrait de naissance",
},
{
  'id': 3,
  'Papiername': "Extrait de décès",
},
{
  'id': 4,
  'Papiername': "Transcriptions",
}];

export default {
  name: 'AdministrationPage',
  setup() {
    return {
      PapierObject,
    }
  }
}
</script>
