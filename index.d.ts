import indicator from './indicator'
export { indicator }

export default function ordinal (i: number): `${string}${'th' | 'st' | 'nd' | 'rd'}`
