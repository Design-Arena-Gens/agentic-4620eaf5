import Image from "next/image";

const keyStats = [
  {
    label: "Nom botanique",
    value: "Brassica oleracea var. botrytis",
  },
  {
    label: "Famille",
    value: "Brassicacées (crucifères)",
  },
  {
    label: "Origine",
    value: "Région méditerranéenne, sélectionnée à partir du chou sauvage",
  },
];

const morphologicalTraits = [
  {
    title: "Inflorescence hypertrophiée",
    description:
      "La « pomme » est un dôme compact constitué de méristèmes floraux arrêtés avant l’épanouissement, donnant sa texture granuleuse caractéristique.",
  },
  {
    title: "Feuillage protecteur",
    description:
      "De longues feuilles vert-bleuté entourent et protègent l’inflorescence de la lumière, garantissant une teinte ivoire homogène.",
  },
  {
    title: "Système racinaire pivotant",
    description:
      "La plante développe une racine pivotante robuste qui assure sa stabilité et l’accès à l’humidité dans les sols lourds et frais.",
  },
];

const nutrients = [
  {
    nutrient: "Vitamine C",
    amount: "59 mg / 100 g",
    role: "Soutient l’immunité et l’absorption du fer, antioxydant puissant.",
  },
  {
    nutrient: "Vitamine B9 (folates)",
    amount: "57 µg / 100 g",
    role: "Essentielle à la croissance cellulaire et à la grossesse.",
  },
  {
    nutrient: "Fibres",
    amount: "2,0 g / 100 g",
    role: "Favorisent la satiété et la bonne santé digestive.",
  },
  {
    nutrient: "Composés soufrés",
    amount: "Glucosinolates",
    role: "Précurseurs d’isothiocyanates protecteurs pour les cellules.",
  },
];

const calendar = [
  {
    stage: "Semis en pépinière",
    period: "Février – avril",
    detail:
      "Graines semées sous abri à 18‑20 °C ; repiquage au stade 4 feuilles.",
  },
  {
    stage: "Plantation au potager",
    period: "Avril – juin",
    detail:
      "Espacement de 60 cm, sol riche en matière organique et arrosages réguliers.",
  },
  {
    stage: "Formation de la pomme",
    period: "Juin – septembre",
    detail:
      "Ligature facultative des feuilles pour préserver la blancheur ; besoins élevés en eau.",
  },
  {
    stage: "Récolte",
    period: "Septembre – décembre",
    detail:
      "Couper la tige principale lorsque la pomme est bien ferme, avant l’ouverture des fleurons.",
  },
];

const culinaryIdeas = [
  {
    title: "Rôti au four",
    highlight: "Caramélisation des fleurons",
    description:
      "Enrobé d’huile d’olive, de cumin et de curcuma, le chou-fleur développe des notes noisettées tout en restant fondant.",
  },
  {
    title: "Velouté soyeux",
    highlight: "Texture nappante",
    description:
      "Mixé avec un bouillon de légumes et un peu de lait d’amande, il donne une soupe ultra-crémeuse sans matière grasse.",
  },
  {
    title: "Taboulé végétal",
    highlight: "Alternative sans céréales",
    description:
      "Râpé cru en grains fins, il remplace la semoule et conserve toutes ses vitamines pour des salades fraîches.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate px-4 pb-16 pt-12 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 -top-32 z-[-1] mx-auto h-72 w-[36rem] rounded-full bg-lime-300/40 blur-3xl sm:w-[48rem]" />
      <main className="mx-auto max-w-6xl space-y-20">
        <section className="grid gap-10 rounded-3xl bg-white/90 p-10 shadow-xl ring-1 ring-lime-200/60 backdrop-blur">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-lime-100 px-4 py-1 text-sm font-semibold text-lime-700">
                Portrait botanique
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Les caractéristiques du chou-fleur, légume fleur aux mille
                atouts.
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Cultivé depuis l’Antiquité dans le bassin méditerranéen, le
                chou-fleur est une variété sélectionnée pour sa pomme charnue et
                délicate. Son profil nutritionnel, sa polyvalence culinaire et
                ses exigences agronomiques en font un incontournable des jardins
                et des tables d’automne.
              </p>
              <dl className="grid gap-6 sm:grid-cols-3">
                {keyStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-lime-50/80 p-5 ring-1 ring-lime-200"
                  >
                    <dt className="text-sm font-medium uppercase tracking-wide text-lime-700">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-slate-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-lime-200/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-lime-200 bg-lime-50 shadow-lg">
                <Image
                  src="/cauliflower.jpg"
                  alt="Tête de chou-fleur fraîche avec ses feuilles protectrices"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/80 bg-white/80 p-8 shadow-lg backdrop-blur">
            <h2 className="text-2xl font-semibold text-slate-900">
              Morphologie remarquable
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Chaque partie du chou-fleur résulte d’un travail de sélection
              variétale visant à préserver une inflorescence dense et blanche.
              Les points suivants résument les atouts botaniques qui le
              distinguent des autres brassicacées.
            </p>
            <ul className="mt-6 space-y-5">
              {morphologicalTraits.map((trait) => (
                <li
                  key={trait.title}
                  className="rounded-2xl border border-lime-100 bg-lime-50/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {trait.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {trait.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-lime-100 bg-gradient-to-br from-lime-100 via-white to-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900">
              Repères rapides
            </h2>
            <dl className="mt-6 space-y-4 text-sm text-slate-700">
              <div>
                <dt className="font-semibold text-slate-900">
                  Cycle cultural
                </dt>
                <dd>
                  120 à 180 jours selon la précocité variétale, idéal dans les
                  climats humides et tempérés.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Exposition</dt>
                <dd>Ensoleillée mais non brûlante, sol frais, profond et riche.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Variétés</dt>
                <dd>
                  Blanche (Romanesco, Snowball), violette (Sicilia), orange
                  (Cheddar) : les pigments évoluent selon les anthocyanes.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Conservation optimale
                </dt>
                <dd>1 semaine au réfrigérateur, pomme entière non lavée.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">
                Profil nutritionnel (pour 100 g cru)
              </h2>
              <p className="text-base text-slate-600">
                Pauvre en calories (25 kcal) mais riche en micronutriments, le
                chou-fleur contribue à un régime protecteur contre le stress
                oxydatif et les déséquilibres glycémiques.
              </p>
            </div>
            <div className="rounded-2xl border border-lime-100 bg-lime-50/60 p-4 text-sm text-lime-700">
              Astuce : pour préserver les vitamines, privilégiez une cuisson à
              la vapeur douce (7 minutes) ou une dégustation crue en fleurettes.
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-lime-100">
            <table className="min-w-full divide-y divide-lime-200 bg-white text-left text-sm text-slate-700">
              <thead className="bg-lime-100 text-xs font-medium uppercase tracking-wide text-lime-700">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Nutriment clé
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Quantité indicative
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Impact sur l’organisme
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lime-50">
                {nutrients.map((item) => (
                  <tr key={item.nutrient} className="transition hover:bg-lime-50/70">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-slate-900"
                    >
                      {item.nutrient}
                    </th>
                    <td className="px-4 py-4 text-sm">{item.amount}</td>
                    <td className="px-4 py-4 text-sm">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur md:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">
              Calendrier cultural
            </h2>
            <p className="text-base text-slate-600">
              Les producteurs programment plusieurs cycles pour assurer un
              approvisionnement continu de septembre à mars. Cette chronologie
              résume les principaux gestes.
            </p>
          </div>
          <ol className="relative space-y-6 border-l border-lime-200 pl-8">
            {calendar.map((step, index) => (
              <li key={step.stage} className="space-y-1">
                <span className="absolute -left-[9px] mt-1 inline-flex h-3.5 w-3.5 rounded-full border border-white bg-lime-500 shadow" />
                <span className="text-xs font-semibold uppercase tracking-wide text-lime-700">
                  Étape {index + 1}
                </span>
                <div className="text-lg font-semibold text-slate-900">
                  {step.stage}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {step.period}
                </div>
                <p className="text-sm text-slate-600">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">
                En cuisine : trois inspirations
              </h2>
              <p className="text-base text-slate-600">
                Du croquant cru au fondant rôti, le chou-fleur se prête à une
                multitude de textures. Sa saveur douce accepte bien les épices
                et les associations iodées.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full bg-lime-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-lime-800">
              Variété de textures
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {culinaryIdeas.map((idea) => (
              <article
                key={idea.title}
                className="flex h-full flex-col rounded-2xl border border-lime-100 bg-gradient-to-br from-white to-lime-50/60 p-6 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {idea.title}
                </h3>
                <span className="mt-3 inline-flex w-fit rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700">
                  {idea.highlight}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {idea.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-lime-100 bg-lime-50/70 p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">
                Conseils d’achat & conservation
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>
                  • Choisir une pomme dense, lourde en main, sans taches
                  brunes ni fleurons ouverts.
                </li>
                <li>
                  • Préserver quelques feuilles externes pour prolonger la
                  fraîcheur et éviter le dessèchement.
                </li>
                <li>
                  • Conserver au froid (0‑4 °C) dans un sac perforé pour limiter
                  l’humidité stagnante.
                </li>
                <li>
                  • Blanchir 3 minutes les fleurettes avant congélation afin de
                  stabiliser couleur et texture.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-lime-100 bg-white/90 p-6 text-sm text-slate-600 shadow-inner">
              <p className="font-semibold text-slate-900">
                Astuce anti-odeurs
              </p>
              <p className="mt-2">
                Ajouter un filet de jus de citron ou un morceau de pain sec dans
                l’eau de cuisson limite les effluves soufrés tout en conservant
                la blancheur des fleurons.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl rounded-3xl bg-slate-900/90 px-10 py-8 text-sm text-lime-50 shadow-lg">
        Le chou-fleur est une source précieuse de diversité végétale : explorez
        les variétés colorées pour enrichir vos assiettes et soutenir une
        agriculture résiliente.
      </footer>
    </div>
  );
}
