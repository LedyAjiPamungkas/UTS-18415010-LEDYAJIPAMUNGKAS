<template>
<q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data RDTA Vapor</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
        <q-input
            label="Kode RDTA"
            lazy-rules
            color="teal"
            v-model="kodeRdta"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan kode RDTA Vapor yang ingin ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="description"/>
            </template>
          </q-input>

          <q-input
            label="Nama RDTA"
            lazy-rules
            color="teal"
            v-model="NamaRdta"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul RDTA Vapor yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

           <q-input
            label="Harga"
            lazy-rules
            color="teal"
            v-model="Harga"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul RDTA Vapor yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <q-input
            label="Tahun Produksi"
            lazy-rules
            color="teal"
            v-model="TahunProduksi"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul RDTA Vapor yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="event_note"/>
            </template>
          </q-input>
          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data RDTA Vapor"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      kodeRdta: null,
      NamaRdta: null,
      Wattage: null,
      Harga: null,
      TahunProduksi: null
    }
  }
}

</script>
