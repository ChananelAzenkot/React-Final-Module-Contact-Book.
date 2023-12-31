const clientStructure = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    required: true,
    block: false,
  },
  {
    name: "middleName",
    type: "text",
    label: "Middle Name",
    required: true,
    block: false,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    required: true,
    block: false,
  },
  { name: "phone", type: "tel", label: "Phone", required: true, block: false },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    block: false,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    block: false,
    initialOnly: true,
  },
  {
    name: "imgUrl",
    type: "text",
    label: "Img Url",
    required: true,
    block: true,
  },
  {
    name: "imgAlt",
    type: "text",
    label: "Img Alt",
    required: true,
    block: false,
  },
  { name: "state", type: "text", label: "State", required: true, block: false },
  {
    name: "country",
    type: "text",
    label: "Country",
    required: true,
    block: false,
  },
  { name: "city", type: "text", label: "City", required: true, block: false },
  {
    name: "street",
    type: "text",
    label: "Street",
    required: true,
    block: false,
  },
  {
    name: "houseNumber",
    type: "number",
    label: "House Number",
    required: true,
    block: false,
  },
  { name: "zip", type: "number", label: "Zip", required: true, block: false },
  {
    name: "business",
    type: "boolean",
    label: "Business",
    required: true,
    block: false,
  },
];

export default clientStructure;