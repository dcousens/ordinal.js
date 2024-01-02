import indicator from './indicator'
export { indicator }

export default function ordinal (i: number): `${number}${'th' | 'st' | 'nd' | 'rd'}`
