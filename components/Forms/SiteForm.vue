<script lang="ts" setup>

const router = useRouter();

const coordinates = ref({
  latitude: "",
  longitude: "",
});
const address = ref("");
const post_code = ref("");

const handleSubmit = async () => {
  const site = {
    coordinates: coordinates.value,
    address: address.value,
    post_code: post_code.value,
  };

  let customer = JSON.parse(localStorage.getItem("user")!);
  const customerSite = customer.push(site);
  // const newUser = Object.assign(customerSite)

  localStorage.setItem("user", JSON.stringify(customerSite));

  console.log(Object.assign(site, customer))
  router.push({ path: "/meter" });
};
</script>

<template>
  <section class="bg-black flex justify-center min-h-[86vh]">
    <div
      class="block m-auto px-6 pb-6 pt-3 rounded-sm shadow-lg bg-white max-w-md"
    >
      <form @submit.prevent="handleSubmit" class="min-w-[300px]">
        <div class="my-4 text-center">
          <h2 class="font-bold text-xl max-w-[240px] m-auto leading-6 mb-2">
            Let's continue adding some fields
          </h2>
          <p class="text-gray-500 text-sm">
            This is the STEP 2 into the process
          </p>
        </div>
        <div class="grid grid-cols-2 mb-6">
          <label for=""
            >Coordinates GPS
            <p class="mb-2 text-xs text-gray-400">
              To check your coordinates, visit
              <a
                href="https://www.maps.ie/coordinates.html"
                target="_blank"
                class="text-black underline"
                >here</a
              >
            </p>
          </label>
          <input
            v-model="coordinates.latitude"
            type="number"
            class="block col-span-2 w-full mb-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
            placeholder="Latitude"
            autocomplete="Off"
            required
          />
          <input
            v-model="coordinates.longitude"
            type="number"
            class="block col-span-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
            placeholder="Longitude"
            autocomplete="Off"
            required
          />
        </div>
        <div class="mb-6">
          <input
            v-model="address"
            type="text"
            class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
            placeholder="Address"
            autocomplete="Off"
            required
          />
        </div>
        <div class="mb-6">
          <input
            v-model="post_code"
            type="text"
            class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
            placeholder="Post Code"
            autocomplete="Off"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full px-6 py-2 bg-black border-2 border-black font-semibold text-white leading-tight rounded-sm shadow-md hover:border-2 hover:border-black hover:bg-white hover:shadow-lg hover:text-black transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>
