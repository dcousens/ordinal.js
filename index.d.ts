import indicator from './indicator'
export { indicator }

export default function ordinal <I extends number>(i: I): `${I}${'th' | 'st' | 'nd' | 'rd'}`
