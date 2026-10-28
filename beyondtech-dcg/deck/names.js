// Re-applies the eleven slide names (Figma Slides resets them to numbers after a rebuild). Read-safe to rerun.
const ids={"2:2":"01 Cover","2:4":"02 Executive Summary","2:5":"03 Diagnosis","2:6":"04 DTU Plan","2:7":"05 DTU Budget","2:8":"06 College Selection","2:9":"07 Pan-India Launch","2:10":"08 Launch Playbook","2:11":"09 Roadmap and Risks","2:12":"10 Appendix","2:13":"11 Thank You"};
const out=[]; for(const [id,name] of Object.entries(ids)){ const s=await figma.getNodeByIdAsync(id); if(!s){ out.push({id,missing:true}); continue; } s.name=name; out.push({id,name:s.name}); }
return out;
