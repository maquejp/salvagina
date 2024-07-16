import { TrajetInterface } from "../interfaces/TrajetInterface";

const trajetsData: TrajetInterface[] = [
  {
    de: {
      target: "_GOBXL",
      href: "https://www.google.be/maps/dir/Brussels/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.8054838,1.7928453,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c3a4ed73c76867:0xc18b3a66787302a7!2m2!1d4.3517103!2d50.8503396!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Bruxelles (Belgique)",
    },
    distance: "222 Km",
    temps: "02 h 15",
    id: "BRUXELLES",
  },
  {
    de: {
      target: "_GOLG",
      href: "https://www.google.be/maps/dir/Li%C3%A8ge/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.7426815,2.4060518,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c0f74b8eacfcfb:0x40099ab2f4d6b40!2m2!1d5.5796662!2d50.6325574!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Liège (Belgique)",
    },
    distance: "320 Km",
    temps: "03 h 02",
    id: "LIEGE",
  },
  {
    de: {
      target: "_GOMONS",
      href: "https://www.google.be/maps/dir/Mons,+Belgium/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.5757994,2.186808,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c24558a6578cfb:0x40099ab2f4d6c90!2m2!1d3.956659!2d50.4542408!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Mons (Belgique)",
    },
    distance: "211 Km",
    temps: "02 h 05",
    id: "MONS",
  },
  {
    de: {
      target: "_GONAM",
      href: "https://www.google.be/maps/dir/Namur,+Belgium/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.7426815,2.071691,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c1996d0c2c653f:0xc15626b6c4165205!2m2!1d4.8719854!2d50.4673883!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Namur (Belgique)",
    },
    distance: "281 Km",
    temps: "02 h 45",
    id: "NAMUR",
  },
  {
    de: {
      target: "_GOARL",
      href: "https://www.google.be/maps/dir/Arlon,+Belgium/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.4269944,2.5214449,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47eab06a0a66f2e5:0x2c12dca732086d98!2m2!1d5.8104804!2d49.6851364!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Arlon (Belgique)",
    },
    distance: "412 Km",
    temps: "03 h 46",
    id: "ARLON",
  },
  {
    de: {
      target: "_GOBIN",
      href: "https://www.google.be/maps/dir/Binche/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.650565,1.7037045,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c2384266123c31:0x3515dcba46e816b7!2m2!1d4.1659!2d50.41218!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Binche (Belgique)",
    },
    distance: "227 Km",
    temps: "02 h 20",
    id: "BINCHE",
  },
  {
    de: {
      target: "_GOANVL",
      href: "https://www.google.be/maps/dir/Antwerp/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.8210843,1.861516,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c3f68ebfc3887d:0x3eaf448482a88ab8!2m2!1d4.4024643!2d51.2194475!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Antwerpen (Anvers) (Belgique)",
    },
    distance: "229 Km",
    temps: "02 h 19",
    id: "ANVERS",
  },
  {
    de: {
      target: "_GOHAS",
      href: "https://www.google.be/maps/dir/Hasselt/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.8054838,2.2842026,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c12183ded75db7:0xf7cb7b027e7e2181!2m2!1d5.33248!2d50.93069!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Hasselt (Belgique)",
    },
    distance: "307 Km",
    temps: "02 h 56",
    id: "HASSELT",
  },
  {
    de: {
      target: "_GOLUX",
      href: "https://www.google.be/maps/dir/Luxembourg+City,+Luxembourg/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.3963557,2.6839298,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x479548cd9df32c57:0x400d1d6d1056d10!2m2!1d6.1319346!2d49.611621!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Luxembourg ville (GDL)",
    },
    distance: "437 Km",
    temps: "04 h 03",
    id: "LUXEMBOURG",
  },
  {
    de: {
      target: "_GOPAR",
      href: "https://www.google.be/maps/dir/Paris,+France/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@49.8112876,1.002882,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!2m2!1d2.3522219!2d48.856614!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Paris (France)",
    },
    distance: "271 Km",
    temps: "02 h 44",
    id: "PARIS",
  },
  {
    de: {
      target: "_GOLIL",
      href: "https://www.google.be/maps/dir/Lille,+France/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.7204448,1.7379569,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c2d579b3256e11:0x40af13e81646360!2m2!1d3.057256!2d50.62925!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Lille (France)",
    },
    distance: "136 Km",
    temps: "01 h 24",
    id: "LILLE",
  },
  {
    de: {
      target: "_GOMAU",
      href: "https://www.google.be/maps/dir/Maubeuge,+France/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.5757994,2.1974009,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c2429dcd7d7533:0x40af13e81646100!2m2!1d3.9674!2d50.280228!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Maubeuge (France)",
    },
    distance: "219 Km",
    temps: "02 h 13",
    id: "MAUBEUGE",
  },
  {
    de: {
      target: "_GOTHI",
      href: "https://www.google.be/maps/dir/Thionville,+France/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@50.0860301,1.7342873,7z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x479525297d62f987:0xa7af8d1a441ac977!2m2!1d6.168426!2d49.357571!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Thionville (France)",
    },
    distance: "495 Km",
    temps: "04 h 11",
    id: "THIONVILLE",
  },
  {
    de: {
      target: "_GOZWO",
      href: "https://www.google.be/maps/dir/Zwolle,+Netherlands/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@51.6563379,2.6577666,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c7df209d12ecb1:0xcd0b5b2492dd3e8c!2m2!1d6.0830219!2d52.5167747!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Zwolle (Netherlands)",
    },
    distance: "439 Km",
    temps: "04 h 03",
    id: "ZWOLLE",
  },
  {
    de: {
      target: "_GOGRO",
      href: "https://www.google.be/maps/dir/Groningen,+Netherlands/8+Rue+Jeanne+d%27Arc,+62164+Ambleteuse,+France/@51.9910773,1.7375263,7z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c83286b462cca7:0xcb4b5086f9a6c8dc!2m2!1d6.5665018!2d53.2193835!1m5!1m1!1s0x47dc2f3c24a7626f:0x7e95c7c863ce2487!2m2!1d1.6011035!2d50.8080726?hl=en",
      label: "Groningen (Netherlands)",
    },
    distance: "539 Km",
    temps: "04 h 56",
    id: "GRONINGEN",
  },
];

export default trajetsData;
