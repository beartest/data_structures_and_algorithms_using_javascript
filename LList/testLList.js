var cites = new LList();
cites.insert("Conway", "head");
cites.insert("Russellville", "Conway");
cites.insert("Carlisle", "Russellville");
cites.insert("Alma", "Carlisle");
cites.display();
console.log(" ");
cites.remove("Carlisle");
cites.display();