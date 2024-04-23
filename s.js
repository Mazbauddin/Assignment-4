function password(obj) {
  const { name, birthYear, siteName } = obj;

  if (
    typeof name !== "string" ||
    typeof birthYear !== "number" ||
    birthYear.toString().length !== 4 ||
    typeof siteName !== "string"
  ) {
    return "invalid";
  } else if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "invalid";
  }

  const passCheck = `${
    siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase()
  }#${name}@${birthYear}`;

  return passCheck;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "facebook" }));
console.log(password({ name: "toky", birthYear: 2000 }));
