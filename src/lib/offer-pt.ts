// Preços de teste. Alterar apenas após validação da oferta.
// Checkouts intencionalmente desativados: não adicionar URLs sem autorização.
export const offer = {
  basic: { price: 9.9, checkoutUrl: null as string | null },
  professional: { price: 19.9, checkoutUrl: null as string | null },
} as const;
