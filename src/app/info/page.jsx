import SpeciesSection from "@/components/Cart";

const Page = () => {
  
  const especies = [
    {
      nombre: "Cactus de navidad",
      imagen: "https://i.pinimg.com/564x/39/6f/d8/396fd8a7d03c65484602eefd9c7a4178.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: '../info/01.jpeg',
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "https://i.pinimg.com/236x/47/03/da/4703da1ae896399dc1046faaca2e427d.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
    {
      nombre: "Cactus de navidad",
      imagen: "/assets/cactus-navidad.jpg",
      descripcion:
        "El cactus de navidad es una especie de cactus originaria de México. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 1 metro. Sus flores son de color rojo brillante y florecen durante la temporada navideña."
    },
    {
      nombre: "Cactus columnar",
      imagen: "/assets/cactus-columnar.jpg",
      descripcion:
        "El cactus columnar es una especie de cactus originaria de América del Norte. Es una planta de crecimiento rápido que puede alcanzar una altura de hasta 20 metros. Sus flores son de color blanco o amarillo y florecen durante el verano."
    },
    {
      nombre: "Cactus estrella",
      imagen: "/assets/cactus-estrella.jpg",
      descripcion:
        "El cactus estrella es una especie de cactus originaria de América del Sur. Es una planta de crecimiento lento que puede alcanzar una altura de hasta 50 centímetros. Sus flores son de color rosa o morado y florecen durante la primavera."
    },
  ];

  return (
    <div>
      <SpeciesSection especies={especies} />
    </div>
  );
};

export default Page;
