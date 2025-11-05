export function downloadVCard() {
  const link = document.createElement("a");
  link.href = "/luzyladev-nerdearla.vcf";
  link.download = "luzyladev-nerdearla.vcf";
  link.click();
}
