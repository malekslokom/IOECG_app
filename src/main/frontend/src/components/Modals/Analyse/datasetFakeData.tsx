// Static dataset data
const datasets = [
    {
      id: 1,
      name: "Dataset 1",
      description: "Description of Dataset 1",
      type: "search_results",
      ecgs: [
        {
          id: 101,
          patientId: 1,
          filepath: "/path/to/ecg/file1",
          recordingStartedAt: "2024-03-09T08:00:00Z",
          recordingEndedAt: "2024-03-09T08:05:00Z",
          recordingInitialSamplingRate: 1000,
          recordingSamplingRate: 500,
          recordingDuration: 300,
          protocolDetails: {},
          data:[1.000000000000000000e+00,7.582644820213317871e-01,1.115702465176582336e-01,0.000000000000000000e+00,8.057851344347000122e-02,7.851240038871765137e-02,6.611569970846176147e-02,4.958677664399147034e-02,4.752065986394882202e-02,3.512396663427352905e-02,3.099173493683338165e-02,2.892562001943588257e-02,3.512396663427352905e-02,2.685950323939323425e-02,3.925620019435882568e-02,3.512396663427352905e-02,4.338843002915382385e-02,4.752065986394882202e-02,5.371900647878646851e-02,5.371900647878646851e-02,7.024793326854705811e-02,7.231404632329940796e-02,8.471074700355529785e-02,9.710744023323059082e-02,1.219008266925811768e-01,1.322313994169235229e-01,1.694214940071105957e-01,1.962809860706329346e-01,2.148760259151458740e-01,2.355371862649917603e-01,2.541322410106658936e-01,2.644627988338470459e-01,2.851239740848541260e-01,2.727272808551788330e-01,2.665289342403411865e-01,2.396694272756576538e-01,2.148760259151458740e-01,1.735537201166152954e-01,1.570248007774353027e-01,1.239669397473335266e-01,1.219008266925811768e-01,1.074380129575729370e-01,1.053718999028205872e-01,9.710744023323059082e-02,1.053718999028205872e-01,9.917355328798294067e-02,1.053718999028205872e-01,9.917355328798294067e-02,1.074380129575729370e-01,1.074380129575729370e-01,1.157024800777435303e-01,1.115702465176582336e-01,1.219008266925811768e-01,1.115702465176582336e-01,1.198347136378288269e-01,1.115702465176582336e-01,1.136363670229911804e-01,1.115702465176582336e-01,1.219008266925811768e-01,1.053718999028205872e-01,1.074380129575729370e-01,1.012396663427352905e-01,1.012396663427352905e-01,8.677686005830764771e-02,9.297520667314529419e-02,8.471074700355529785e-02,8.264462649822235107e-02,7.851240038871765137e-02,7.851240038871765137e-02,7.024793326854705811e-02,7.644627988338470459e-02,6.818182021379470825e-02,7.851240038871765137e-02,7.024793326854705811e-02,6.818182021379470825e-02,6.818182021379470825e-02,7.438016682863235474e-02,7.231404632329940796e-02,9.090909361839294434e-02,1.012396663427352905e-01,1.074380129575729370e-01,1.053718999028205872e-01,1.219008266925811768e-01,1.157024800777435303e-01,1.095041334629058838e-01,9.710744023323059082e-02,1.033057868480682373e-01,9.710744023323059082e-02,8.677686005830764771e-02,7.231404632329940796e-02,7.024793326854705811e-02,5.371900647878646851e-02,5.785124003887176514e-02,4.958677664399147034e-02,5.785124003887176514e-02,5.165289342403411865e-02,5.578512325882911682e-02,5.371900647878646851e-02,5.371900647878646851e-02,0.000000000000000000e+00,1.239669416099786758e-02,1.880165338516235352e-01,6.818181872367858887e-01,9.752066135406494141e-01,6.157024502754211426e-01,4.132231324911117554e-02,1.239669416099786758e-02,8.677686005830764771e-02,6.611569970846176147e-02,6.611569970846176147e-02,5.165289342403411865e-02,3.925620019435882568e-02,4.338843002915382385e-02,3.305784985423088074e-02,4.132231324911117554e-02,3.512396663427352905e-02,4.545454680919647217e-02,4.132231324911117554e-02,4.545454680919647217e-02,4.338843002915382385e-02,4.958677664399147034e-02,4.752065986394882202e-02,6.404958665370941162e-02,6.818182021379470825e-02,0.000000000000000
]
        },
        {
          id: 102,
          patientId: 2,
          filepath: "/path/to/ecg/file2",
          recordingStartedAt: "2024-03-09T09:00:00Z",
          recordingEndedAt: "2024-03-09T09:10:00Z",
          recordingInitialSamplingRate: 1200,
          recordingSamplingRate: 600,
          recordingDuration: 600,
          protocolDetails: {},
          data:[9.084249138832092285e-01,7.838827967643737793e-01,5.311355590820312500e-01,3.626373708248138428e-01,3.663003742694854736e-01,3.443223536014556885e-01,3.333333432674407959e-01,3.076923191547393799e-01,2.967033088207244873e-01,3.003663122653961182e-01,3.040293157100677490e-01,3.369963467121124268e-01,3.772893846035003662e-01,3.919413983821868896e-01,4.395604431629180908e-01,4.468864500522613525e-01,4.578754603862762451e-01,4.798534810543060303e-01,5.128205418586730957e-01,5.347985625267028809e-01,5.860806107521057129e-01,5.860806107521057129e-01,6.043956279754638672e-01,6.336996555328369141e-01,6.153846383094787598e-01,5.824176073074340820e-01,5.641025900840759277e-01,5.201465487480163574e-01,4.908424913883209229e-01,4.908424913883209229e-01,4.688644707202911377e-01,4.542124569416046143e-01,4.505494534969329834e-01,4.652014672756195068e-01,4.505494534969329834e-01,4.322344362735748291e-01,4.249084293842315674e-01,4.102564156055450439e-01,3.919413983821868896e-01,3.699633777141571045e-01,3.736263811588287354e-01,3.663003742694854736e-01,3.186813294887542725e-01,3.113553225994110107e-01,3.260073363780975342e-01,3.113553225994110107e-01,3.150183260440826416e-01,3.223443329334259033e-01,3.443223536014556885e-01,3.443223536014556885e-01,3.333333432674407959e-01,3.040293157100677490e-01,3.076923191547393799e-01,2.820512950420379639e-01,2.710622847080230713e-01,2.857142984867095947e-01,2.637362778186798096e-01,2.747252881526947021e-01,2.820512950420379639e-01,2.673992812633514404e-01,2.783882915973663330e-01,2.893773019313812256e-01,2.930403053760528564e-01,2.893773019313812256e-01,2.893773019313812256e-01,2.893773019313812256e-01,2.930403053760528564e-01,2.820512950420379639e-01,2.673992812633514404e-01,2.564102709293365479e-01,2.527472674846649170e-01,2.161172181367874146e-01,2.234432250261306763e-01,2.380952388048171997e-01,2.161172181367874146e-01,2.673992812633514404e-01,4.175824224948883057e-01,5.824176073074340820e-01,6.153846383094787598e-01,6.227106451988220215e-01,7.619047760963439941e-01,8.644688725471496582e-01,1.000000000000000000e+00,9.084249138832092285e-01,6.739926934242248535e-01,3.150183260440826416e-01,1.538461595773696899e-01,1.208791211247444153e-01,9.890110045671463013e-02,4.395604506134986877e-02,2.197802253067493439e-02,2.197]
        }
      ]
    },
    {
      id: 2,
      name: "Dataset 2",
      description: "Description of Dataset 2",
      type: "standard",
      ecgs: [
        {
          id: 201,
          patientId: 3,
          filepath: "/path/to/ecg/file3",
          recordingStartedAt: "2024-03-09T10:00:00Z",
          recordingEndedAt: "2024-03-09T10:05:00Z",
          recordingInitialSamplingRate: 800,
          recordingSamplingRate: 400,
          recordingDuration: 300,
          protocolDetails: {},
          data:[7.300884723663330078e-01,2.123893797397613525e-01,0.000000000000000000e+00,1.194690242409706116e-01,1.017699092626571655e-01,1.017699092626571655e-01,1.106194704771041870e-01,1.238938048481941223e-01,1.150442510843276978e-01,1.327433586120605469e-01,1.061946898698806763e-01,1.415929198265075684e-01,1.283185780048370361e-01,1.504424810409545898e-01,1.327433586120605469e-01,1.504424810409545898e-01,1.327433586120605469e-01,1.504424810409545898e-01,1.238938048481941223e-01,1.637168079614639282e-01,1.371681392192840576e-01,1.415929198265075684e-01,1.327433586120605469e-01,1.504424810409545898e-01,1.283185780048370361e-01,1.460177004337310791e-01,1.194690242409706116e-01,1.238938048481941223e-01,1.017699092626571655e-01,9.292035549879074097e-02,7.079645991325378418e-02,7.964602112770080566e-02,6.637167930603027344e-02,7.079645991325378418e-02,7.964602112770080566e-02,9.292035549879074097e-02,8.849557489156723022e-02,8.407079428434371948e-02,7.964602112770080566e-02,8.849557489156723022e-02,9.292035549879074097e-02,1.061946898698806763e-01,1.061946898698806763e-01,1.238938048481941223e-01,9.734513610601425171e-02,1.238938048481941223e-01,1.194690242409706116e-01,1.415929198265075684e-01,1.327433586120605469e-01,1.548672616481781006e-01,1.460177004337310791e-01,1.681415885686874390e-01,1.592920422554016113e-01,1.637168079614639282e-01,1.681415885686874390e-01,1.681415885686874390e-01,1.637168079614639282e-01,1.814159303903579712e-01,1.858407109975814819e-01,1.991150379180908203e-01,1.769911497831344604e-01,2.035398185253143311e-01,1.902654916048049927e-01,2.035398185253143311e-01,1.946902722120285034e-01,2.123893797397613525e-01,2.035398185253143311e-01,2.123893797397613525e-01,2.123893797397613525e-01,2.256637215614318848e-01,2.389380484819412231e-01,2.831858396530151367e-01,3.053097426891326904e-01,3.938052952289581299e-01,4.513274431228637695e-01,4.336283206939697266e-01,3.716814219951629639e-01,3.584070801734924316e-01,2.743362784385681152e-01,2.168141603469848633e-01,1.814159303903579712e-01,1.858407109975814819e-01,1.858407109975814819e-01,1.858407109975814819e-01,1.946902722120285034e-01,2.256637215614318848e-01,1.814159303903579712e-01,2.256637215614318848e-01,6.681416034698486328e-01,1.000000000000000000e+00,4.601770043373107910e-01,1.902654916048049927e-01,2.035398185253143311e-01,2.079645991325378418e-01,1.946902722120285034e-01,2.079645991325378418e-01,1.946902722120285034e-01,1.858407109975814819e-01,1.946902722120285034e-01,2.123893797397613525e-01,2.079645991325378418e-01,2.168141603469848633e-01,2.079645991325378418e-01,2.256637215614318848e-01,2.168141603469848633e-01,2.345132678747177124e-01,2.256637215614318848e-01,2.345132678747177124e-01,2.300885021686553955e-01,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000]
        },
        {
          id: 202,
          patientId: 4,
          filepath: "/path/to/ecg/file4",
          recordingStartedAt: "2024-03-09T11:00:00Z",
          recordingEndedAt: "2024-03-09T11:10:00Z",
          recordingInitialSamplingRate: 1000,
          recordingSamplingRate: 500,
          recordingDuration: 600,
          protocolDetails: {},
          data:[1.000000000000000000e+00,9.104166626930236816e-01,6.812499761581420898e-01,4.729166626930236816e-01,2.291666716337203979e-01,6.875000149011611938e-02,0.000000000000000000e+00,4.166666883975267410e-03,1.458333339542150497e-02,5.416666716337203979e-02,1.020833328366279602e-01,1.229166686534881592e-01,1.500000059604644775e-01,1.687500029802322388e-01,1.729166656732559204e-01,1.708333343267440796e-01,1.687500029802322388e-01,1.645833402872085571e-01,1.562500000000000000e-01,1.520833373069763184e-01,1.479166597127914429e-01,1.479166597127914429e-01,1.458333283662796021e-01,1.458333283662796021e-01,1.416666656732559204e-01,1.416666656732559204e-01,1.479166597127914429e-01,1.583333313465118408e-01,1.687500029802322388e-01,1.791666597127914429e-01,1.916666626930236816e-01,2.062499970197677612e-01,2.208333313465118408e-01,2.395833283662796021e-01,2.583333253860473633e-01,2.750000059604644775e-01,2.874999940395355225e-01,3.083333373069763184e-01,3.208333253860473633e-01,3.312500119209289551e-01,3.416666686534881592e-01,3.458333313465118408e-01,3.520833253860473633e-01,3.541666567325592041e-01,3.458333313465118408e-01,3.458333313465118408e-01,3.479166626930236816e-01,3.416666686534881592e-01,3.416666686534881592e-01,3.437500000000000000e-01,3.437500000000000000e-01,3.416666686534881592e-01,3.375000059604644775e-01,3.416666686534881592e-01,3.604166805744171143e-01,3.583333194255828857e-01,3.583333194255828857e-01,3.520833253860473633e-01,3.562499880790710449e-01,3.583333194255828857e-01,3.437500000000000000e-01,3.041666746139526367e-01,2.874999940395355225e-01,2.708333432674407959e-01,2.666666805744171143e-01,2.604166567325592041e-01,2.624999880790710449e-01,2.562499940395355225e-01,2.687500119209289551e-01,2.604166567325592041e-01,2.645833194255828857e-01,2.687500119209289551e-01,2.708333432674407959e-01,2.708333432674407959e-01,2.750000059604644775e-01,2.729166746139526367e-01,2.791666686534881592e-01,2.812500000000000000e-01,2.812500000000000000e-01,2.833333313465118408e-01,2.770833373069763184e-01,2.604166567325592041e-01,3.187499940395355225e-01,4.812499880790710449e-01,6.145833134651184082e-01,7.479166388511657715e-01,9.041666388511657715e-01,9.708333611488342285e-01,9.354166388511657715e-01,7.395833134651184082e-01,5.458333492279052734e-01,3.145833313465118408e-01,1.270833313465118408e-01,1.666666753590106964e-02,2.083333395421504974e-02,2.291666716337203979e-02,6.458333134651184082e-02,1.020833328366279602e-01,1.229166686534881592e-01,1.583333313465118408e-01,1.770833283662796021e-01,1.729166656732559204e-01,1.749999970197677612e-01,1.687500029802322388e-01,1.645833402872085571e-01,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000000e+00,0.000000000000000
]
        }
      ]
    }
  ];
  
  export default datasets;
  