function (gdijkstraraph, start) {
    const distances = {};
    const unvisitedNodes = Object.keys(graph);
    const visitedNodes = [];
  
    
    unvisitedNodes.forEach(node => {
      distances[node] = node === start? 0 : Infinity;
    });
  
    while (unvisitedNodes.length > 0) {

      let smallestNode = null;
      let smallestDistance = Infinity;
      unvisitedNodes.forEach(node => {
        if (distances[node] < smallestDistance) {
          smallestNode = node;
          smallestDistance = distances[node];
        }
      });
  

      unvisitedNodes.splice(unvisitedNodes.indexOf(smallestNode), 1);
      visitedNodes.push(smallestNode);
  
      
      Object.keys(graph[smallestNode]).forEach(neighbor => {
        const distance = distances[smallestNode] + graph[smallestNode][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
        }
      });
    }
  
    return distances;
  }
  
  // Example usage:
  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };
  
  const result = dijkstra(graph, 'A');
  console.log(result);
  