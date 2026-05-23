export function generateAudit(monthlySpend: number, teamSize: number) {
  let savings = 0;
  let recommendation = "";

  if (teamSize <= 2 && monthlySpend > 100) {
    savings = monthlySpend * 0.4;
    recommendation =
      "Your team may be overpaying for enterprise-tier AI plans.";
  } else if (monthlySpend > 500) {
    savings = monthlySpend * 0.3;
    recommendation =
      "You could reduce costs significantly using optimized AI credits.";
  } else {
    savings = monthlySpend * 0.15;
    recommendation =
      "Some smaller optimizations are available for your stack.";
  }

  return {
    currentSpend: monthlySpend,
    estimatedSavings: Math.round(savings),
    optimizedSpend: Math.round(monthlySpend - savings),
    recommendation,
  };
}