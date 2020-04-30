<template>
<q-page>
 <div class="q-pa-md">
    <q-table
      title="`Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Data Transaksi</span>
        </span>
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'desc',
          required: true,
          label: 'Kode Vapor',
          align: 'left',
          field: row => row.kodeVapor,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
        { name: 'NamaVapor', align: 'center', label: 'Nama Vapor', field: 'NamaVapor', sortable: true },
        { name: 'Wattage', align: 'center', label: 'Wattage', field: 'Wattage' },
        { name: 'Harga', align: 'center', label: 'Harga', field: 'Harga' },
        { name: 'TahunProduksi', align: 'center', label: 'Tahun Produksi', field: 'TahunProduksi' }
      ],
      data: [
        {
          kodeTransaksi: 'abc123',
          kodeVapor: 'K001',
          namaPembeli: 'Eki Adi Pratama',
          NamaVapor: 'Tesla Invander 3',
          Wattage: '200 watt',
          Harga: 'Rp.200.000,-',
          TahunProduksi: '2019'
        },
        {
          kodeTransaksi: 'abc123',
          kodeVapor: 'K001',
          namaPembeli: 'Eki Adi Pratama',
          NamaVapor: 'Tesla Invander 3',
          Wattage: '200 watt',
          Harga: 'Rp.200.000,-',
          TahunProduksi: '2019'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
